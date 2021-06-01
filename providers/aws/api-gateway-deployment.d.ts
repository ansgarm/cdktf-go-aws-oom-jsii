import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#description ApiGatewayDeployment#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#rest_api_id ApiGatewayDeployment#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#stage_description ApiGatewayDeployment#stage_description}.
     */
    readonly stageDescription?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#stage_name ApiGatewayDeployment#stage_name}.
     */
    readonly stageName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#triggers ApiGatewayDeployment#triggers}.
     */
    readonly triggers?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#variables ApiGatewayDeployment#variables}.
     */
    readonly variables?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html aws_api_gateway_deployment}.
 */
export declare class ApiGatewayDeployment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html aws_api_gateway_deployment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayDeploymentConfig);
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get executionArn(): string;
    get id(): string;
    get invokeUrl(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _stageDescription?;
    get stageDescription(): string;
    set stageDescription(value: string);
    resetStageDescription(): void;
    get stageDescriptionInput(): string | undefined;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    resetStageName(): void;
    get stageNameInput(): string | undefined;
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    };
    set triggers(value: {
        [key: string]: string;
    });
    resetTriggers(): void;
    get triggersInput(): {
        [key: string]: string;
    } | undefined;
    private _variables?;
    get variables(): {
        [key: string]: string;
    };
    set variables(value: {
        [key: string]: string;
    });
    resetVariables(): void;
    get variablesInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}

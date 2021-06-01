import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html#cluster_arn DataAwsEcsService#cluster_arn}.
     */
    readonly clusterArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html#service_name DataAwsEcsService#service_name}.
     */
    readonly serviceName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html aws_ecs_service}.
 */
export declare class DataAwsEcsService extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html aws_ecs_service} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsEcsServiceConfig);
    get arn(): string;
    private _clusterArn;
    get clusterArn(): string;
    set clusterArn(value: string);
    get clusterArnInput(): string;
    get desiredCount(): number;
    get id(): string;
    get launchType(): string;
    get schedulingStrategy(): string;
    private _serviceName;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
    get taskDefinition(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamOpenidConnectProviderConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#client_id_list IamOpenidConnectProvider#client_id_list}.
     */
    readonly clientIdList: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#tags IamOpenidConnectProvider#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#tags_all IamOpenidConnectProvider#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#thumbprint_list IamOpenidConnectProvider#thumbprint_list}.
     */
    readonly thumbprintList: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#url IamOpenidConnectProvider#url}.
     */
    readonly url: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider}.
 */
export declare class IamOpenidConnectProvider extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamOpenidConnectProviderConfig);
    get arn(): string;
    private _clientIdList;
    get clientIdList(): string[];
    set clientIdList(value: string[]);
    get clientIdListInput(): string[];
    get id(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _thumbprintList;
    get thumbprintList(): string[];
    set thumbprintList(value: string[]);
    get thumbprintListInput(): string[];
    private _url;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
